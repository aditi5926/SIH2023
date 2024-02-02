function HighlightedText({children}){
    return (<span className="bg-gradient-to-b from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent">
        {
            children
        }
    </span>)
}
export default HighlightedText;