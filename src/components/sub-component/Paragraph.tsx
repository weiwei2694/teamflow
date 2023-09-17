interface ParagraphProps {
    content: string;
}

const Paragraph = ({ content }: ParagraphProps) => {
  return (
    <p className="text-dark-500 leading-[30px] md:leading-[38px] tracking-[0.5%] font-normal text-lg md:text-2xl">
        {content}
    </p>
  )
}

export default Paragraph