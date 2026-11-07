import { useState, useEffect } from 'react';

export const useFileExists = (url: string | undefined): boolean => {
  const [exists, setExists] = useState<boolean>(false);

  useEffect(() => {
    if (!url) {
      setExists(false);
      return;
    }

    let isMounted = true;
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        if (isMounted) {
          // If status is 200-299, the file exists
          setExists(res.ok);
        }
      })
      .catch(() => {
        if (isMounted) {
          setExists(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return exists;
};

