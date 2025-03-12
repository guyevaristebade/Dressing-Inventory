import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError(null);
    console.log("Connexion réussie avec :", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Connexion
        </h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Votre email"
            onChange={handleChange}
          />

          <label className="block text-gray-700 dark:text-gray-300 mt-4">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            className="mt-2 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Mot de passe"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>

        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};
