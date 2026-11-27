import { FontToggle } from "@/components/FontToggle";
import { InputInline } from "@/components/Searchbar";
import Grainient from "@/components/Grainient";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Grainient
          colors={["#0c0c0f", "#3f3f46", "#a1a1aa", "#fafafa"]}
          angle={55}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
          type="linear"
          bands={1}
          softness={1}
          scale={1}
          speed={1}
          grainSize={1.2}
          grainAnimated
          contrast={1}
          saturation={1}
          variation={0}
          interactive={false}
          stir={1}
          clickSwirl={false}
          intro
          lightMode={false}
        />
      </div>
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col">
        <header className="pointer-events-auto flex items-start justify-between p-4">
          <div>
            <h1 className="font-semibold text-3xl mix-blend-difference">
              Weitgeist
            </h1>
            <p className="text-sm text-muted-foreground">
              Wikipedia Re-imagined
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div>{/*<ModeToggle />*/}</div>
            <FontToggle />
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center px-4 pt-24">
          <div className="w-1/2 pointer-events-auto">
            <InputInline />
          </div>
        </main>
        <footer className="py-4 text-sm pointer-events-auto">
          <nav className="flex flex-wrap justify-center gap-6 text-secondary-foreground underline underline-offset-2 hover:text-secondary-foreground">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/credits">Credits</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
