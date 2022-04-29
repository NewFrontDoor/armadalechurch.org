import React from 'react';
import Iframe from 'react-iframe';

function VerseOfTheDagIFrame() {
  return (
    <section>
      <div className="col-md-4 col-xs-12">
        <div className="region region-content-2-2">
          <div className="block block-block">
            <h2 className="header-custom-color">Verse of the Day</h2>
            <div className="content">
              <div style={{ minHeight: '250px', maxWidth: '95%' }}>
                <Iframe framespacing="0" frameborder="no" url="https://www.biblegateway.com/votd/get/?format=html&version=NIV">View Verse of the Day</Iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default VerseOfTheDagIFrame