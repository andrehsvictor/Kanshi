interface BackgroundImageProps {
  bg: string;
}

export function BackgroundImage({ bg }: BackgroundImageProps) {
  return (
    <img src={bg} className="w-screen h-screen object-cover blur-sm" alt="bg" />
  );
}
