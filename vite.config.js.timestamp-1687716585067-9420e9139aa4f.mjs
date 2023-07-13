// vite.config.js
import viteImageMin from "file:///B:/WEB%20Dev/NSG/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = () => {
  return {
    plugins: [
      viteImageMin({
        gifsicle: {
          optimizationLevel: 3,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 80
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox"
            },
            {
              name: "removeEmptyAttrs",
              active: false
            }
          ]
        },
        webp: {
          quality: 80
        }
      })
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJCOlxcXFxXRUIgRGV2XFxcXE5TR1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQjpcXFxcV0VCIERldlxcXFxOU0dcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0I6L1dFQiUyMERldi9OU0cvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgdml0ZUltYWdlTWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZpdGVJbWFnZU1pbih7XHJcbiAgICAgICAgZ2lmc2ljbGU6IHtcclxuICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiAzLFxyXG4gICAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vempwZWc6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG5ncXVhbnQ6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXHJcbiAgICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN2Z286IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVWaWV3Qm94JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVFbXB0eUF0dHJzJyxcclxuICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlYnA6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDgwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFvTyxPQUFPLGtCQUFrQjtBQUU3UCxJQUFPLHNCQUFRLE1BQU07QUFDbkIsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsYUFBYTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ1IsbUJBQW1CO0FBQUEsVUFDbkIsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLG1CQUFtQjtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFVBQ2xCLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsWUFDVjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
