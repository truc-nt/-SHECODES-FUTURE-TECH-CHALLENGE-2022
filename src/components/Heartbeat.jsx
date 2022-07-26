import '../assets/css/Heartbeat.css'
import React, {useState} from 'react'

const HeartModal = ({setOpenHeartModal}) => {
  return (
      <div className = 'modal'>
          <div className = 'modal-container'>
              <div className = 'modal-body'>
                    <p>Cảm ơn mọi người vì đã đọc đến đây</p>
                    <p>Khi hoàn thành xong sản phẩm này tới có rất nhiều cảm nghĩ, một phần đã được ghi ở bên trong, phần còn lại là  
                        niềm vui khi mình có thể hoàn thành hết được cuốn này. Đây là project đầu tiên mà tớ hoàn thành được tới cùng 
                        trong khoảng thời gian khá ngắn đối với tớ. Lúc đầu tớ chỉ tính dùng HTML, CSS, JS đơn thuần thôi vì Reactjs thì tớ chỉ 
                        mới tìm hiểu nên cũng không nắm rõ lắm. Nhưng rồi cuối cùng tớ liều mình dùng React luôn. Vừa làm vừa học, cái gì không biết 
                        thì tra Google :'') Sản phẩm còn chuyển hơi lag qua lại giữa landscape và portrait và còn nhiều thiếu sót khác nhưng nhìn chung
                        thì tớ thấy sản phẩm này cũng ổn so với mong đợi của tới :3.
                    </p>
                    <p>Một lần nữa cảm ơn các bạn đã đọc đến đây. Tớ hiện giờ chỉ biết mỗi thứ chút chút về Front-end và nếu các bạn không chê và đang có
                    project nào thiếu người cùng hoàn thành thì hãy suy xét tới việc thêm tớ vào nha :3. Tớ hứa sẽ cố gắng hết mình để hoàn thành.
                    </p>
                    <p>Cảm ơn mọi người rất nhiều ạ.</p>
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