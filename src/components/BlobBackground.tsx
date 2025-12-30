export function BlobBackground() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main irregular/amoeba-like blob (more organic and bumpy than the original) */}
      <path
        fill="currentColor"
        d="M433,296Q471,392,379,447Q287,502,195,451Q103,400,77,308Q51,216,114,136Q177,56,269,83Q361,110,407,186Q453,262,433,296Z"
      />

      {/* Small floating blobs to match the style in your attached images (detached organic shapes around the main blob) */}
      <ellipse cx="70" cy="90" rx="45" ry="25" fill="currentColor" />
      <ellipse cx="430" cy="80" rx="35" ry="45" fill="currentColor" transform="rotate(-45 430 80)" />
      <ellipse cx="90" cy="410" rx="40" ry="30" fill="currentColor" transform="rotate(20 90 410)" />
      <ellipse cx="410" cy="420" rx="30" ry="50" fill="currentColor" transform="rotate(70 410 420)" />
      <circle cx="250" cy="450" r="25" fill="currentColor" />
      <circle cx="120" cy="200" r="20" fill="currentColor" />
      <ellipse cx="380" cy="220" rx="25" ry="35" fill="currentColor" transform="rotate(-30 380 220)" />
      <circle cx="200" cy="80" r="15" fill="currentColor" />
    </svg>
  )
}