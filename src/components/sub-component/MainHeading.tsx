interface MainHeadingProps {
    title: string;
    highlightedTitle: string;
    isFront?: boolean;
}

const MainHeading = ({ title, highlightedTitle, isFront }: MainHeadingProps) => {
  return (
    <h2 className="leading-[147%] font-semibold text-dark-500 text-4xl md:text-5xl">
        {!isFront && <span className="text-yellow-100">{highlightedTitle}</span>}{" "}
        {title}{" "}
        {isFront && <span className="text-yellow-100">{highlightedTitle}</span>}
    </h2>
  )
}

export default MainHeading