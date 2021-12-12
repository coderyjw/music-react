import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import UserLogin  from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight 
} 
from './style'
function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}



export default memo(Recommend)

// function Recommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners()
//     return () => {
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [getBanners])
//   return (
//     <div>
//       recommend: {topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.get('recommend').get('topBanners')
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
