const { supabase } = require("../supabaseClient");

const getAllUsers = async (req, res) => {
  const { data, error, count } = await supabase
    .from("users")
    .select("*", { count: "exact" });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const safeData = data || [];

  res.setHeader(
    "Content-Range",
    `users 0-${safeData.length - 1}/${count || 0}`,
  );

  return res.json(safeData);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    return res.status(400).json({ err: "name is required" });
  }

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email }])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(404).json({ err: "User not found" });
  }

  return res.json(data);
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { data, error } = await supabase
    .from("users")
    .update({ name })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
