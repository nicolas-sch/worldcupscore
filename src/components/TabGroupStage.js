import { useContext } from 'react';
import { Context } from '../App';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/TabGroupStage.css';
import ScoreBoard from './ScoreBoard';
import MatchBoard from './MatchBoard';

function TabGroupStage() {

	const [teams, , matches] = useContext(Context);
	const groups = ['A'];

	return (
		<Tabs className='react-tabs subTab'>
			<TabList className='tablist'>
				{groups.map((group) => (
					<Tab key={group} className='react-tabs__tab tabGS'>{('Group')} {group}</Tab>
				))}
			</TabList>

			{groups.map((group) => (
				<TabPanel key={`group-${group}`} className={`react-tabs__tab-panel panel-group-${group}`}>
					<div className='panel-container'>
						<ScoreBoard
							teams={teams.filter(team => team.group === group)} />
						<MatchBoard
							teamsGroup={teams.filter(team => team.group === group)}
							matchesGroup={matches.filter(match => match.group === group)} />
					</div>
				</TabPanel>
			))}

		</Tabs>
	);
}

export default TabGroupStage;
