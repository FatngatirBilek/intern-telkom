"use client";
import React, { useEffect, useState } from "react";

type Feature = {
  id: number;
  title: string;
  description?: string | null;
};

type Category = {
  id: number;
  name: string;
};

type PriceCard = {
  id?: number;
  plan: string;
  price: string;
  period: string;
  description: string;
  buttonLabel: string;
  categoryId: number;
  features: Feature[];
  featureIds?: number[];
};

type CategoryWithCards = Category & { cards: PriceCard[] };

export default function DashboardTable() {
  const [cards, setCards] = useState<CategoryWithCards[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState<Partial<PriceCard> | null>(null);
  const [loading, setLoading] = useState(true);

  // State for new feature and new category
  const [newFeature, setNewFeature] = useState({ title: "", description: "" });
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("/api/price-cards").then((res) => res.json()),
      fetch("/api/features").then((res) => res.json()),
      fetch("/api/categories").then((res) => res.json()),
    ]).then(([cards, features, categories]) => {
      setCards(cards);
      setFeatures(features);
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  const handleEdit = (card: PriceCard, categoryId: number) =>
    setForm({
      ...card,
      categoryId,
      featureIds: card.features.map((f) => f.id),
    });

  const handleAdd = () =>
    setForm({
      plan: "",
      price: "",
      period: "",
      description: "",
      buttonLabel: "",
      categoryId: categories[0]?.id ?? "",
      featureIds: [],
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;
    const method = form.id ? "PUT" : "POST";
    await fetch("/api/price-cards", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        featureIds: form.featureIds,
        categoryId: Number(form.categoryId),
      }),
    });
    location.reload();
  };

  // Handler for adding new feature
  const handleAddFeature = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeature),
    });
    setNewFeature({ title: "", description: "" });
    fetch("/api/features")
      .then((res) => res.json())
      .then(setFeatures);
  };

  // Handler for adding new category
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory }),
    });
    setNewCategory("");
    fetch("/api/categories")
      .then((res) => res.json())
      .then(setCategories);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard PriceCard</h1>

      {/* Form Add Feature */}
      <form onSubmit={handleAddFeature} className="mb-4 flex gap-2">
        <input
          value={newFeature.title}
          onChange={(e) =>
            setNewFeature({ ...newFeature, title: e.target.value })
          }
          placeholder="Feature Title"
          required
          className="border p-1"
        />
        <input
          value={newFeature.description}
          onChange={(e) =>
            setNewFeature({ ...newFeature, description: e.target.value })
          }
          placeholder="Description"
          className="border p-1"
        />
        <button type="submit" className="bg-green-600 text-white px-2 rounded">
          Add Feature
        </button>
      </form>

      {/* Form Add Category */}
      <form onSubmit={handleAddCategory} className="mb-4 flex gap-2">
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category Name"
          required
          className="border p-1"
        />
        <button type="submit" className="bg-blue-600 text-white px-2 rounded">
          Add Category
        </button>
      </form>

      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleAdd}
      >
        Add PriceCard
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Plan</th>
              <th className="border px-2 py-1">Price</th>
              <th className="border px-2 py-1">Period</th>
              <th className="border px-2 py-1">Category</th>
              <th className="border px-2 py-1">Features</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {cards.flatMap((cat) =>
              cat.cards.map((card) => (
                <tr key={card.id}>
                  <td className="border px-2 py-1">{card.plan}</td>
                  <td className="border px-2 py-1">{card.price}</td>
                  <td className="border px-2 py-1">{card.period}</td>
                  <td className="border px-2 py-1">{cat.name}</td>
                  <td className="border px-2 py-1">
                    {card.features.map((f: Feature) => (
                      <span
                        key={f.id}
                        className="inline-block bg-gray-200 px-2 py-1 m-1 rounded"
                        title={f.description || ""}
                      >
                        {f.title}
                      </span>
                    ))}
                  </td>
                  <td className="border px-2 py-1">
                    <button
                      className="px-2 py-1 bg-yellow-400 rounded"
                      onClick={() => handleEdit(card, cat.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      )}

      {form && (
        <form
          className="mt-8 p-4 border rounded bg-white max-w-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-2 text-lg font-semibold">
            {form.id ? "Edit" : "Add"} PriceCard
          </h2>
          <label className="block mb-1">Plan:</label>
          <input
            className="block mb-2 border p-1 w-full"
            placeholder="Plan"
            value={form.plan ?? ""}
            onChange={(e) => setForm({ ...form, plan: e.target.value })}
            required
          />
          <label className="block mb-1">Price:</label>
          <input
            className="block mb-2 border p-1 w-full"
            placeholder="Price"
            value={form.price ?? ""}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <label className="block mb-1">Period:</label>
          <input
            className="block mb-2 border p-1 w-full"
            placeholder="Period"
            value={form.period ?? ""}
            onChange={(e) => setForm({ ...form, period: e.target.value })}
            required
          />
          <label className="block mb-1">Description:</label>
          <input
            className="block mb-2 border p-1 w-full"
            placeholder="Description"
            value={form.description ?? ""}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <label className="block mb-1">Button Label:</label>
          <input
            className="block mb-2 border p-1 w-full"
            placeholder="Button Label"
            value={form.buttonLabel ?? ""}
            onChange={(e) => setForm({ ...form, buttonLabel: e.target.value })}
            required
          />
          <label className="block mb-1">Category:</label>
          <select
            className="block mb-2 border p-1 w-full"
            value={form.categoryId ?? ""}
            onChange={(e) =>
              setForm({ ...form, categoryId: Number(e.target.value) })
            }
            required
          >
            <option value="">Pilih Kategori</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <label className="block mb-1">Features:</label>
          <select
            multiple
            className="block mb-2 border p-1 w-full"
            value={form.featureIds?.map(String) ?? []}
            onChange={(e) =>
              setForm({
                ...form,
                featureIds: Array.from(e.target.selectedOptions, (opt) =>
                  Number(opt.value),
                ),
              })
            }
          >
            {features.map((f) => (
              <option key={f.id} value={f.id}>
                {f.title}
              </option>
            ))}
          </select>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            type="submit"
          >
            Save
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-400 text-white rounded"
            type="button"
            onClick={() => setForm(null)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
