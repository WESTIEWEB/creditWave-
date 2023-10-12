type copyRightProps = {
    className?: string;
    text?: string;
}

const CopyRight: React.FC<copyRightProps> = ({
    className,
    text
}) => {
  return (
    <p className={className}>
        {text}
    </p>
  )
}

export default CopyRight
