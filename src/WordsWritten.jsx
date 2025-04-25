const WordsWritten = ({ accurateWords, yourWords }) => {
  return (
    <div
      className="modal fade words_written"
      id="wordsWritten"
      tabIndex="-1"
      aria-labelledby="wordsWrittenLabel"
      aria-hidden="true"
    //   data-bs-backdrop="false" 
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <h3>Your Words</h3>
          {yourWords ? (
            <p>
              {yourWords.map((item, index) => (
                <span key={index} className={!item.isCorrect ? "danger" : ""}>
                  {item.word}
                </span>
              ))}
            </p>
          ) : (
            <p>No words found</p>
          )}
          <h3 className="mt-4">Expected Words</h3>
          {accurateWords ? (
            <p>
              {accurateWords.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
          ) : (
            <p>No words found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WordsWritten
