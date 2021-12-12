import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function Recommend(props) {
  
  const recommend = useSelector(state => ({
      topBanners: state.get('recommend').get('topBanners')
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
    return () => {
    }
  }, [dispatch])

  return (
    <div>
      recommend: {recommend.topBanners.length}
    </div>
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
