import { useState } from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Veuillez entrer votre email.");
      return;
    }

    setMessage("Un lien de réinitialisation a été envoyé.");
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Mot de passe oublié
        </h2>

        {message && (
          <p className="text-green-500 text-center mt-2">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="mt-2 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
};
