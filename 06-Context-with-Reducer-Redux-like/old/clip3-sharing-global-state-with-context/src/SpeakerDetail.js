import ImageToggleOnScroll from './ImageToggleOnScroll';

import { GlobalContext } from './GlobalState';
import { useContext } from 'react';

const SpeakerDetail = React.memo(({ speakerRec, onHeartFavoriteHandler }) => {
  const { id, firstName, lastName, bio, favorite } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

  const { favoriteClickCount, incrementFavoriteClickCount } = useContext(
    GlobalContext,
  );

  //const { favoriteClickCount,incrementFavoriteClickCount } = useSpeakerDataManager();

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              incrementFavoriteClickCount();
              onHeartFavoriteHandler(e, speakerRec);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <h5>Click Count: &nbsp;({favoriteClickCount})</h5>

        <span>{bio}</span>
      </div>
    </div>
  );
});

export default SpeakerDetail;