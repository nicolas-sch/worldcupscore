import './App.css';
import TabBox from './components/TabBox';
import { useState, createContext, Suspense } from 'react';
import listTeams from './data/teams';
import listMatches from './data/matches';

export const Context = createContext();

function SuspensedApp() {
  const [teams, setTeams] = useState(listTeams);
	const [matches, setMatches] = useState(listMatches);
	const [teamsFinalScore, setTeamsFinalScore] = useState(listTeams);
	const [finalScoreboardEnabled, setFinalScoreboardEnabled] = useState(false);

  function enableScoreboard () {
		setFinalScoreboardEnabled(true);
	}

  return (
    <Context.Provider value={[ teams, setTeams, matches, setMatches, teamsFinalScore, setTeamsFinalScore]}>
      <div className="App">
        <TabBox enableScoreboard={enableScoreboard} />
      </div>
    </Context.Provider>
  );
}

function App() {
  return (
    <Suspense fallback="Loading dependencies. If the page doesn't load, turn off Google auto translation or another translation service you use and reload the page to access.">
      <SuspensedApp />
    </Suspense>
  );
}

export default App;