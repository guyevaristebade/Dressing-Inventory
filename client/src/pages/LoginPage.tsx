import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = () => {
    const values = form.getFieldsValue();
    setLoading(true);
    // Simuler une requête d'authentification
    setTimeout(() => {
      setLoading(false);
      if (values.email === "password" && values.password === "password") {
        message.success("Connexion réussie !");
        navigate("/dashboard");
      } else {
        message.error("Email ou mot de passe incorrect !");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-white text-2xl font-bold">Connexion</h2>

        <Form layout="vertical" onFinish={onFinish}>
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

          <Form.Item
            label={<span className="text-gray-300">Mot de passe</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre mot de passe !",
              },
            ]}
          >
            <Input.Password placeholder="Mot de passe" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
              size="large"
            >
              Se connecter
            </Button>
          </Form.Item>
        </Form>

        {/* Lien Mot de passe oublié */}
        <div className="text-center mt-2">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>

        {/* Lien Inscription */}
        <p className="text-center text-gray-400 mt-4">
          Pas encore de compte ?
          <Link to="/signup" className="text-blue-500 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};
