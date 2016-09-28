jQuery(function($){
          $('body').vidbg({
              'mp4': 'media/mp4_video.mp4',
              'webm': 'media/webm_video.webm',
              'poster': 'media/fallback.jpg',
          }, {
            // Options
            muted: true,
            loop: true,
            overlay: true,
          });
      });