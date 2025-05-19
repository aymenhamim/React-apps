import LoginForm from "@/components/admin/login/LoginForm";

export const metadata = {
  title: "Form",
};

function page() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-stone-50 flex justify-center items-center">
      <LoginForm />
    </div>
  );
}

export default page;
