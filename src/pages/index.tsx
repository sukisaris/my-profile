import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faUser, faMapMarkerAlt, faTree, faFileCode, faTag } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './styles.css';

export default function Home() {
  const [loadImage, setLoadImage] = useState<boolean>(false);

  const onLoadFoto = () => setLoadImage(true);

  const myAge = moment().diff('1999-10-14', 'years', false);

  return (
    <section className='container'>
      <section className='main'>
        <section className='me'>
          <section className='ctme'>
            <FontAwesomeIcon className={'icon'} icon={faTag} />
            <section>
              <span>Aris Sukiswanto</span>
              <span>{myAge} years old</span>
            </section>
          </section>
        </section>
        <section className='ts'>
          <section className='personal'>
            <section>
              <FontAwesomeIcon className={'icon'} icon={faUser} />
              <section>
                <span>Gender</span>
                <span>Male</span>
              </section>
            </section>
            <section>
              <FontAwesomeIcon className={'icon'} icon={faMapMarkerAlt} />
              <section>
                <span>Live In</span>
                <span>Indonesia, East Java</span>
              </section>
            </section>
            <section>
              <FontAwesomeIcon className={'icon'} icon={faFileCode} />
              <section>
                <span>Skills</span>
                <span>Programing</span>
              </section>
            </section>
            <section>
              <FontAwesomeIcon className={'icon'} icon={faTree} />
              <section>
                <span>Interest &amp; Hobbies</span>
                <span>Gardening &amp; Fishing</span>
              </section>
            </section>
          </section>
          <img
            style={{ display: loadImage ? 'unset' : 'none', position: loadImage ? 'unset' : 'fixed' }}
            className='foto'
            src={require('../assets/sukis.jpg').default}
            onLoad={onLoadFoto}
          />
        </section>
        <section className='sm'>
          <section>
            <FontAwesomeIcon className='icon' icon={faGooglePlusSquare} />
            <span>arissukiswanto@gmail.com</span>
          </section>
          <section>
            <FontAwesomeIcon className='icon' icon={faWhatsappSquare} />
            <span>081290805243</span>
          </section>
        </section>
      </section>
    </section>
  );
}
