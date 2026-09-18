import Link from "next/link";

type BackToWorksLinkProps = {
  className: string;
};

export default function BackToWorksLink({ className }: BackToWorksLinkProps) {
  return (
    <Link href="/work" className={className}>
      <span className="back-to-works-icon" aria-hidden="true">
        {/* Same path as /public/thrival/arrow-vector.svg, flipped via CSS */}
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.60742 1.60742L9.64425 9.64425L1.60742 17.6811"
            stroke="currentColor"
            strokeWidth="3.21473"
            strokeLinecap="round"
          />
        </svg>
      </span>
      back to works
    </Link>
  );
}
