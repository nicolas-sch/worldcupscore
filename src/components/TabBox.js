import { Tabs, TabPanel } from 'react-tabs';
import './styles/TabBox.css';
import TabGroupStage from './TabGroupStage.js';

function TabBox({enableScoreboard}) {

	return (
		<>
			<Tabs className='react-tabs tabBox'>
				<TabPanel>
					<TabGroupStage />
				</TabPanel>
			</Tabs>
		</>
	);
}

export default TabBox;
