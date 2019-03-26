// 名片分享样式
export default class LastMayday {
    cardInfo = {}
  
    do (cardInfo) {
      this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
      return this._template()
    }
  
    TEXT_SMALL = {
      fontSize: '24rpx'
    }
  
    _template () {
      return ({
        background: '#fff',
        width: '530rpx',
        height: '942rpx',
        borderRadius: '0px',
        views: [{
          type: 'image',
          url: this.cardInfo.avatar,
          css: {
            top: '0px',
            right: '0px',
            width: '530rpx',
            height: '842rpx',
            borderRadius: '0rpx',
            mode:'scaleToFill'
            // align: 'right'
          }
        },
        {
          type: 'text',
          text: '深圳·九榕台·徐女士的家',
          css: {
            right: '20rpx',
            top: '800rpx',
            fontSize: '20rpx',
            align: 'right'
          }
        },
        {
            type: 'image',
            url: this.cardInfo.avatarUrl,
            css: {
              top: '857rpx',
              left: '20px',
              width: '70rpx',
              height: '70rpx',
              borderRadius: '35rpx',
              mode:'scaleToFill'
            }
          },
          {
            type: 'image',
            url: this.cardInfo.avatarUrl,
            css: {
              top: '852rpx',
              right: '20px',
              width: '80rpx',
              height: '80rpx',
              borderRadius: '40rpx',
              mode:'scaleToFill'
            }
          }
        ]
      })
    }
  }