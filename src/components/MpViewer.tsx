import dynamic from 'next/dynamic';
import {MatterportViewerProps} from '@matterport/r3f';
import {setAttributes} from '../lib/Util';

// @matterport/r3f - https://www.npmjs.com/package/@matterport/r3f
// Dynamically import component, otherwise getting error: ReferenceError: self is not defined
const MatterportViewer = dynamic<MatterportViewerProps>(() => import('@matterport/r3f').then((mod) => mod.MatterportViewer), {ssr: false});

// 'NEXT_PUBLIC_APP_KEY' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghij0123456789abcde'`.
const appKey = process.env.NEXT_PUBLIC_APP_KEY;
const modelId = process.env.NEXT_PUBLIC_MODEL_ID;

/**
 * MatterportViewer wrapper component. It sets WebComponent (matterport-viewer HTML element) attributes via WebComponentConfig
 *
 * @param {any} param
 * @param {string | JSX.Element | JSX.Element[] | null} param.children Children component(s) or string
 * @param {WebComponentConfig} param.config WebComponent Config
 * @returns {JSX.Element} Component
 * @component
 */
const MpViewer = ({children, config}: {children: string | JSX.Element | JSX.Element[] | null; config: WebComponentConfig}) => {
  const containerClassName = config.containerClassName;
  const attributes = setAttributes(config);

  return (
    <div className={containerClassName}>
      <div className="relative flex-1">
        <MatterportViewer
          m={modelId!}
          applicationKey={appKey!}
          assetBase="assets"
          {...attributes}
          onPlaying={(mpSdk) => {
            mpSdk.Camera.rotate(-90, 0);
          }}
        >
          {children}
        </MatterportViewer>
      </div>
    </div>
  );
};

export default MpViewer;
