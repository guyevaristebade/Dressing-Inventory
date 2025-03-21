import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    const { email } = values;

    if (!email) {
      message.error("Veuillez entrer votre email.");
      return;
    }

    setLoading(true);

    // Simuler l'envoi de l'email (remplacer par appel API réel)
    setTimeout(() => {
      message.success(
        "Un lien de réinitialisation a été envoyé à votre email."
      );
      navigate("/login"); // Redirection après envoi
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-white text-2xl mt-4 ">
          Mot de passe oublié
        </h2>

        <Form layout="vertical" form={form} onFinish={handleSubmit}>
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

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full"
              loading={loading}
              size="large"
            >
              Envoyer le lien
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
};
