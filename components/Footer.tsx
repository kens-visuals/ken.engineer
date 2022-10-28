export default function Footer() {
  return (
    <footer className="border-t border-t-primary-dark pt-6 dark:border-t-primary-light">
      <div className="my-8 grid gap-4 md:grid-cols-3 lg:max-w-3xl">
        <ul className="space-y-2">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Medium</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <span>
          Designed and Coded by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kens-visuals"
            className="text-js-yellow underline underline-offset-4"
          >
            Ken Nersisyan
          </a>
        </span>
      </div>
    </footer>
  );
}
