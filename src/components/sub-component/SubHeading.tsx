interface SubHeadingProps {
    title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <h3 className="text-2xl md:text-4xl tracking-[2%] leading-[147%] font-bold text-dark-400">
        {title}
    </h3>
  )
}

export default SubHeading