import React, { useEffect } from 'react';
import styled from 'styled-components';

const LinkButton = styled.button`
  min-height: 38px;
  width: 100px;
  margin: 20px;
  color: white;
  background: #282c34;
`;

const BambuserShow = ({
  bambuserShowId,
  joinShowButtonLabel,
}) => {
  const containerId = `js-bambuser-${bambuserShowId}`;

  useEffect(() => {
    if (!window.initBambuserLiveShopping) {
      window.initBambuserLiveShopping = function(item) {
        window.initBambuserLiveShopping.queue.push(item);
      };
      window.initBambuserLiveShopping.queue = [];
      const scriptNode = document.createElement('script');
      scriptNode.src =
        'https://lcx-embed.bambuser.com/daniel-wellington/embed.js';
      document.body.appendChild(scriptNode);
    }

    // If you comment next line, everything will work fine
    window.onBambuserLiveShoppingReady = () => {};

    window.initBambuserLiveShopping({
      showId: bambuserShowId,
      node: document.getElementById(containerId),
      type: 'overlay',
    });
  }, [bambuserShowId, containerId]);

  return (
    <>
      <LinkButton id={containerId}>
        {joinShowButtonLabel}
      </LinkButton>
    </>
  );
};

export default BambuserShow;
