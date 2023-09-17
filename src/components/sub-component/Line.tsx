import { cn } from "@/lib/utils";

interface LineProps {
    color: string;
}

const Line = ({ color }: LineProps) => {
  return (
    <div className={cn("h-[4px] w-[100px]", color)} />
  )
}

export default Line