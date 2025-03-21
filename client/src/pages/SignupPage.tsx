import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = () => {
    const values = form.getFieldsValue();
    setLoading(true);

    // Simulation d'inscription (remplace par un appel API)
    setTimeout(() => {
      if (values.password !== values.confirmPassword) {
        message.error("Les mots de passe ne correspondent pas !");
      } else {
        message.success("Inscription réussie !");
        navigate("/dashboard"); // Redirection après inscription
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-white text-2xl font-bold">
          Inscription
        </h2>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Champ Email */}
          <Form.Item
            label={<span className="text-gray-300">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Veuillez entrer votre email !" },
              { type: "email", message: "Email invalide !" },
            ]}
          >
            <Input placeholder="Votre email" size="large" />
          </Form.Item>

          {/* Champ Mot de passe */}
          <Form.Item
            label={<span className="text-gray-300">Mot de passe</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre mot de passe !",
              },
              {
                min: 6,
                message: "Le mot de passe doit contenir au moins 6 caractères.",
              },
            ]}
          >
            <Input.Password placeholder="Mot de passe" size="large" />
          </Form.Item>

          {/* Champ Confirmation du mot de passe */}
          <Form.Item
            label={
              <span className="text-gray-300">Confirmer le mot de passe</span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Veuillez confirmer votre mot de passe !",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Les mots de passe ne correspondent pas !")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirmez le mot de passe"
              size="large"
            />
          </Form.Item>

          {/* Bouton d'inscription */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
              size="large"
            >
              S'inscrire
            </Button>
          </Form.Item>
        </Form>

        {/* Lien Connexion */}
        <p className="text-center text-gray-400 mt-4">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
};
