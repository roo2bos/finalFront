import { Link } from 'react-router-dom';
import datas from '../../datas.json';
import '../assets/css/preview.css';

export default function Preview() {
  const levelLinks = [
    { id: 0, label: 'Lv.0', wordData: 'level0' },
    { id: 1, label: 'Lv.1', wordData: 'level1' },
    { id: 2, label: 'Lv.2', wordData: 'level2' },
    { id: 3, label: 'Lv.3', wordData: 'level3' },
  ];

  return (
    <>
      <h2 className='list-title'>예문 100</h2>
      <p>난이도에 따라 100문장씩 배워볼까요?</p>
      <ul className='preview-container'>
        {levelLinks.map((link) => (
          <li key={link.id} className='preview'>
            <Link to={`/preview/${link.id}`} className='preview-sentence-link'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
