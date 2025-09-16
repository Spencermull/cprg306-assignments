import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Name: Spencer Muller</h1>
      <p>
        Github:  <Link href="https://github.com/Spencermull/cprg306-assignments" className="underline">
          Spencermull/cprg306-assignments
        </Link>
      </p>
    </main>
  );
}
