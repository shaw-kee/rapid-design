import CloseIcon from '@/assets/svg/AppWindow/Close.svg?react';
import MinimizeIcon from '@/assets/svg/AppWindow/Minimize.svg?react';
import FullscreenIcon from '@/assets/svg/AppWindow/Fullscreen.svg?react';
import ExitFullscreenIcon from '@/assets/svg/AppWindow/ExitFullscreen.svg?react';

interface Props {
  isFullscreen: boolean;
  isResizable: boolean;
  handleClose: () => void;
  handleMinimize: () => void;
  handleFullscreen: () => void;
}

const ControlBox = ({ handleClose, handleMinimize, handleFullscreen, isFullscreen, isResizable }: Props) => {
  return (
    <div className='hidden-wrapper absolute left-2 flex items-center gap-1'>
      <button
        className='flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-[0.5px] border-[#00000033] bg-[#FF5F57]'
        onClick={handleClose}
      >
        <CloseIcon width={6} height={6} viewBox='0 0 12 12' color='#A21B2B' className='hidden-item hidden' />
      </button>
      <button
        className={`flex h-3 w-3 ${isFullscreen ? 'bg-[#9ca3af]' : 'cursor-pointer bg-[#FEBC2E]'} items-center 
          justify-center rounded-full border-[0.5px] border-[#00000033]`}
        onClick={handleMinimize}
        disabled={isFullscreen}
      >
        {!isFullscreen && (
          <MinimizeIcon width={6} height={6} viewBox='0 0 12 12' color='#96550F' className='hidden-item hidden' />
        )}
      </button>
      <button
        className={`flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-[0.5px] border-[#00000033] ${
          isResizable ? 'bg-[#28C840]' : 'bg-[#9ca3af]'
        }`}
        onClick={handleFullscreen}
        disabled={!isResizable}
      >
        {isFullscreen ? (
          <ExitFullscreenIcon
            width={10}
            height={10}
            viewBox='0 0 19 19'
            color='#137006'
            className='hidden-item hidden'
          />
        ) : (
          isResizable && (
            <FullscreenIcon width={6} height={6} viewBox='0 0 12 12' color='#137006' className='hidden-item hidden' />
          )
        )}
      </button>
    </div>
  );
};

export default ControlBox;
