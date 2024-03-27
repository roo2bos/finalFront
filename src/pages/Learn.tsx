import { useState } from 'react';
import Preview from '../components/Preview';
import Wordquiz from '../components/Wordquiz';
import TabButton from '../components/TabButton';
import TabContent from '../components/TabContent';

export default function Learn() {
  const tabs = [
    { id: 0, label: '문장퀴즈', content: <Wordquiz /> },
    { id: 1, label: '예문100', content: <Preview /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabHandler = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section>
      <h2 className='list-title'>학습하기</h2>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          onClick={() => {
            tabHandler(tab.id);
          }}
          isActive={activeTab === tab.id}
        />
      ))}
      <TabContent content={tabs.find((tab) => tab.id === activeTab)?.content} />
    </section>
  );
}
