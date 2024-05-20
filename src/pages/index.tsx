import {Box} from '@/components/Box';
import {Brand, Dollhouse, Help, OpenBehavior, Play, Quickstart, Tour, GuidedTour, HighlightReel, MlsBehavior, Mattertags, TagNavigation, Pin, Portal, SwitchFloors, FloorPlanView, Language, Zoom, Search, Wheel, GuidedTourPan, LoopBack, Title, GuidedTourCallToAction, HighlightReelBehavior, VirtualReality} from '@/types/enums';
import MpViewer from '@/components/MpViewer';

/**
 * Home component. MpViewer wrapper
 *
 * @returns {JSX.Element} Component
 * @component
 */
const Home = () => {
  const config: WebComponentConfig = {
    modelId: process.env.NEXT_PUBLIC_MODEL_ID!,
    assetBase: '/assets',
    containerClassName: 'showcase flex h-screen p-2 bg-teal-500',
    componentClassName: 'relative flex-1',
    help: Help.Hide,
    openBehavior: OpenBehavior.SameBrowserTab,
    quickstart: Quickstart.Enable,
    brand: Brand.Hide,
    dollhouse: Dollhouse.Show,
    tour: Tour.Model,
    guidedTour: GuidedTour.Show,
    highlightReel: HighlightReel.Show,
    mlsBehavior: MlsBehavior.Branding,
    mattertags: Mattertags.Show,
    tagNavigation: TagNavigation.Show,
    pin: Pin.Show,
    portal: Portal.Show,
    switchFloors: SwitchFloors.Enable,
    floorPlanView: FloorPlanView.Enable,
    language: Language.Default,
    zoom: Zoom.Enable,
    search: Search.Enable,
    guidedTourPan: GuidedTourPan.Disable,
    loopBack: LoopBack.Disable,
    title: Title.Enable,
    guidedTourCallToAction: GuidedTourCallToAction.Large,
    timeBeforeGuidedTour: undefined,
    highlightReelBehavior: HighlightReelBehavior.Expended,
    virtualReality: VirtualReality.Hide,
  };

  return (
    <div className="flex flex-col h-screen p-2 bg-gray-200">
      <MpViewer config={config}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </MpViewer>
    </div>
  );
};

export default Home;
