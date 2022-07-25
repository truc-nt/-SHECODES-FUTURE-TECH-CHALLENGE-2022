import '../assets/css/Heartbeat.css'
import React, {useState} from 'react'

const HeartModal = ({setOpenHeartModal}) => {
  return (
      <div className = 'modal'>
          <div className = 'modal-container'>
              <div className = 'modal-body'>
                    <p>Cảm ơn mọi người vì đã đọc đến đây</p>
                    <p>Khi hoàn thành xong sản phẩm này tới có rất nhiều cảm nghĩ, một phần đã được ghi ở bên trong, phần còn lại là sự 
                        tự hào khi mình có thể hoàn thành hết được cuốn này. Đây là project đầu tiên mà tớ hoàn thành được tới cùng 
                        và trong khoảng thời gian khá ngắn đối với tớ. Lúc đầu tớ chỉ tính dùng HTML, CSS, JS đơn thuần thôi vì Reactjs thì tớ chỉ 
                        mới tìm hiểu nên cũng không nắm rõ lắm. Nhưng rồi cuối cùng tớ liều mình dùng React luôn. Vừa làm vừa học, cái gì không biết 
                        thì tra Google :'') Sản phẩm cũng coi như là khá tốt với dự định ban đầu của tớ.
                    </p>
                    <p>Một lần nữa cảm ơn các bạn đã đọc đến đây. Cảm ơn mọi người rất nhiều</p>
              </div>
          </div>
      </div>
  );
}

const Heartbeat = ({setOpenHeart}) => {
  const [showHeartModal, setOpenHeartModal] = useState(false)
  return (
      <div id = 'heartbeat-container'>
          <div id = 'heartbeat' onClick = {() => {setOpenHeartModal(true)}} style={{display: showHeartModal ? 'none' : 'block' }}>
              
          </div>
          {showHeartModal && <HeartModal></HeartModal>}
      </div>
  );
}

export default Heartbeat