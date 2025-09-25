import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to Week 2 <Link href="week-2/page.js">→ </Link>
        Go to Week 3 <Link href="week-3/page.js">→ </Link> Go to Week 4 → Go to Week 5 → Go to Week 6 → Go to Week 7
        → Go to Week 8 →
      </p>
    </main>
  );
}
