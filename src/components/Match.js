import './styles/Match.css';

function Match ({match, setScore}) {


  return (
    <div className='matches-inline'>
      <div className="match-score">
        <div className="label-home">
          <label
            htmlFor={`match_${match.match}-${match.home.name.toLowerCase()}`}>
            {(match.home.name.replaceAll(' ', '-'))}
          </label>
        </div>
        <div className="input-score">
          <input
            id={`match_${match.match}-${match.home.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.home.goals === null ? '' : match.home.goals}
            onChange={(e) => setScore(match.match, match.home.name, e.target.value, true)} />
          <p>-</p>
          <input
            id={`match_${match.match}-${match.away.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.away.goals === null ? '' : match.away.goals}
            onChange={(e) => setScore(match.match, match.away.name, e.target.value, false)} />
        </div>
        <div className="label-away">
          <label htmlFor={`match_${match.match}-${match.away.name.toLowerCase()}`}>
            {(match.away.name.replaceAll(' ', '-'))}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Match;
