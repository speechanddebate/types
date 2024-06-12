import Tournament from './Tournament.js';
import TournamentEvent from './TournamentEvent.js';
import Result from './Result.js';

interface AutopointEntry {
    tourn: Tournament;
    events: TournamentEvent[];
    results: Result[];
}

export default AutopointEntry;
