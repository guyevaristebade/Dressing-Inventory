import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, message } from "antd";

export const ResetPassword = () => {
  const { token } = useParams(); // Récupération du token dans l'URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    const formValues = form.getFieldsValue();
    form.validateFields().then(() => {
      if (formValues.password !== formValues.confirmPassword) {
        message.error("Les mots de passe ne correspondent pas !");
        return;
      }
    });
    form.resetFields();
    setLoading(true);

    // Ici, vous devriez envoyer une requête au backend pour réinitialiser le mot de passe
    // Par exemple :
    // axios.post('/api/reset-password', { token, password: values.password })
    // Simulation d'une requête au backend

    setTimeout(() => {
      message.success("Votre mot de passe a été réinitialisé !");
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  // Vérifier si le token est valide (ex: pas undefined)
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
          <Typography.Title level={2} className="dark:text-white">
            Erreur
          </Typography.Title>
          <Typography.Paragraph className="dark:text-gray-300">
            Lien invalide ou expiré. Veuillez refaire une demande de
            réinitialisation.
          </Typography.Paragraph>
          <Button type="primary" href="/forgot-password">
            Demander un nouveau lien
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <Typography.Title level={2} className="text-center text-white">
          Réinitialisation du mot de passe
        </Typography.Title>

        <Form layout="vertical" form={form} onFinish={onFinish}>
          {/* Nouveau Mot de Passe */}
          <Form.Item
            label={
              <span className="dark:text-gray-300">Nouveau mot de passe</span>
            }
            name="password"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre nouveau mot de passe !",
              },
              {
                min: 6,
                message: "Le mot de passe doit contenir au moins 6 caractères.",
              },
            ]}
          >
            <Input.Password placeholder="Entrez votre nouveau mot de passe" />
          </Form.Item>

          {/* Confirmation du Mot de Passe */}
          <Form.Item
            label={
              <span className="dark:text-gray-300">
                Confirmer le mot de passe
              </span>
            }
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Veuillez confirmer votre mot de passe !",
              },
            ]}
          >
            <Input.Password placeholder="Confirmez votre mot de passe" />
          </Form.Item>

          {/* Bouton de soumission */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              Réinitialiser le mot de passe
            </Button>
          </Form.Item>
        </Form>

        <Typography.Paragraph className="text-center dark:text-gray-300">
          <a href="/login" className="text-blue-500 hover:underline">
            Retour à la connexion
          </a>
        </Typography.Paragraph>
      </div>
    </div>
  );
};
