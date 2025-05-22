import PasswordDisplay from "@/components/PasswordDisplay";
import Checkboxes from "@/components/Checkboxes";
import Buttons from "@/components/Buttons";

export default function Home() {
  return (
    <div className="items-center justify-items-center mt-56">
      <main className="flex justify-center flex-col gap-4">
        <PasswordDisplay />
        <Checkboxes />
        <Buttons />
      </main>
    </div>
  );
}
