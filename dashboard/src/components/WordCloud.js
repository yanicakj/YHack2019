import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
//import { TagCloud } from 'react-tagcloud'
import CloudItem from './CloudItem';

const styles = {
    large: {
      fontSize: 60,
      fontWeight: 'bold'
    },
    small: {
      opacity: 0.7,
      fontSize: 16
    }
};

let apiData = {
  "good_words" : {
    "leg" : {
      "count": 12
    },
    "room" : {
      "count":12
    },
    "snacks" : {
      "count":8
    },
  },
  "bad_words": {
    "service" : {
      "count": 7,
      "sentiment": .7
    },
    "delay" : {
      "count":10
    }
  }
};
 
class WordCloud extends Component {
  render() {
    return (
        <div style={{'display':'flex', 'flex-direction':'row'}}>
          <div>
            <h1>
              Your doing good!
            </h1>
        <TagCloud 
        className='tag-cloud'
        style={{
          fontFamily: 'sans-serif',
          //fontSize: () => Math.round(Math.random() * 50) + 16,
          fontSize: 30,
          color: () => randomColor({
            hue: 'blue'
          }),
          padding: 5,
          flex: 1,
          width: 500, 
          height: 500
        }}>
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: randomColor()
          }}>Futurama{console.log('rendering wordcloud')}</div>
        {/* <CloudItem text="Custom item, Hover me!" />
        <CloudItem text="Custom item 2, Hover me!" /> */}
        <div style={styles.large}>Transformers</div>
        <div style={styles.large}>Simpsons</div>
        <div style={styles.large}>Dragon Ball</div>
        <div style={styles.large}>Rick & Morty</div>
        <div style={{fontFamily: 'courier'}}>He man</div>
        <div style={{fontSize: 30}}>World trigger</div>
        <div style={{fontStyle: 'italic'}}>Avengers</div>
        <div style={{fontWeight: 200}}>Family Guy</div>
        <div style={{color: 'green'}}>American Dad</div>
        <div className="tag-item-wrapper">
          {/* <div>
            Hover Me Please!
          </div>
          <div className="tag-item-tooltip">
            HOVERED!
          </div> */}
        </div>
        <div>Gobots</div>
        <div>Thundercats</div>
        <div>M.A.S.K.</div>
        <div>GI Joe</div>
        <div>Inspector Gadget</div>
        <div>Bugs Bunny</div>
        <div>Tom & Jerry</div>
        <div>Cowboy Bebop</div>
        <div>Evangelion</div>
        <div>Bleach</div>
        <div>GITS</div>
        <div>Pokemon</div>
        <div>She Ra</div>
        <div>Fullmetal Alchemist</div>
        <div>Gundam</div>
        <div>Uni Taisen</div>
        <div>Pinky and the Brain</div>
        <div>Bobs Burgers</div>
        <div style={styles.small}>Dino Riders</div>
        <div style={styles.small}>Silverhawks</div>
        <div style={styles.small}>Bravestar</div>
        <div style={styles.small}>Starcom</div>
        <div style={styles.small}>Cops</div>
        <div style={styles.small}>Alfred J. Kwak</div>
        <div style={styles.small}>Dr Snuggles</div>
      </TagCloud>
      </div>
      <div></div>
      <div>
            <h1>
              These can use some TLC :)
            </h1>
      <TagCloud 
        className='tag-cloud'
        style={{
          fontFamily: 'sans-serif',
          //fontSize: () => Math.round(Math.random() * 50) + 16,
          fontSize: 30,
          color: () => randomColor({
            hue: 'blue'
          }),
          padding: 5,
          flex: 1,
          width: 500, 
          height: 500
        }}>
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: randomColor()
          }}>Futurama{console.log('rendering wordcloud')}</div>
        {/* <CloudItem text="Custom item, Hover me!" />
        <CloudItem text="Custom item 2, Hover me!" /> */}
        <div style={styles.large}>Transformers</div>
        <div style={styles.large}>Simpsons</div>
        <div style={styles.large}>Dragon Ball</div>
        <div style={styles.large}>Rick & Morty</div>
        <div style={{fontFamily: 'courier'}}>He man</div>
        <div style={{fontSize: 30}}>World trigger</div>
        <div style={{fontStyle: 'italic'}}>Avengers</div>
        <div style={{fontWeight: 200}}>Family Guy</div>
        <div style={{color: 'green'}}>American Dad</div>
        <div className="tag-item-wrapper">
          {/* <div>
            Hover Me Please!
          </div>
          <div className="tag-item-tooltip">
            HOVERED!
          </div> */}
        </div>
        <div>Gobots</div>
        <div>Thundercats</div>
        <div>M.A.S.K.</div>
        <div>GI Joe</div>
        <div>Inspector Gadget</div>
        <div>Bugs Bunny</div>
        <div>Tom & Jerry</div>
        <div>Cowboy Bebop</div>
        <div>Evangelion</div>
        <div>Bleach</div>
        <div>GITS</div>
        <div>Pokemon</div>
        <div>She Ra</div>
        <div>Fullmetal Alchemist</div>
        <div>Gundam</div>
        <div>Uni Taisen</div>
        <div>Pinky and the Brain</div>
        <div>Bobs Burgers</div>
        <div style={styles.small}>Dino Riders</div>
        <div style={styles.small}>Silverhawks</div>
        <div style={styles.small}>Bravestar</div>
        <div style={styles.small}>Starcom</div>
        <div style={styles.small}>Cops</div>
        <div style={styles.small}>Alfred J. Kwak</div>
        <div style={styles.small}>Dr Snuggles</div>
      </TagCloud>
      </div>
    </div>
    );
  }
}

export default WordCloud;

{/* <div style={{'display':'flex', 'flex-direction':'row'}}>
        <div>
        <TagCloud
          style={{width: 200, height: 50}}
          minSize={12}
          maxSize={35}
          tags={data}
          //onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
        </div>
        <div>           </div>
        <div>
        <TagCloud
          style={{width: 200, height: 50}}
          minSize={12}
          maxSize={35}
          tags={data2}
          //onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
        </div>
      </div> */}