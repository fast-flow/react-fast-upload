import {Component} from "react" ;
import classNames from 'classnames';
import props from "./props" ;
import defaultRequest from './request';
import getUid from './uid';
import "./index.css" ;

class ajaxUpload extends Component {
    constructor (props) {
        super(props)
        this.reqs = {};
        this.state = {
            uid: getUid(),
        }
        this.abort = this.abort.bind(this)
    }
    componentWillUnmount() {
        this.abort();
    }
    //拖拽
    onFileDrop(e) {
        if (e.type === 'dragover') {
            e.preventDefault();
            return;
        }

        const files = e.dataTransfer.files;
        this.uploadFiles(files);

        e.preventDefault();
    }
    //多个文件,分别发送post
    uploadFiles(files) {
        const len = files.length;
        for (let i = 0; i < len; i++) {
            const file = files[i];
            file.uid = getUid();
            this.post(file);
        }
    }
    //上传
    post(file) {
        let self = this
        const  props  = self.props;
        let  data  = props.data;
        // const  onStart  = props.onStart;
        if (typeof data === 'function') {
            data = data(file);
        }

        const  uid  = file.uid;


        self.reqs[uid] = defaultRequest({
            action: props.action,
            filename: props.name,
            file,
            data,
            headers: props.headers,
            onProgress: function (e) {
                props.onProgress(e, file);
            },
            onSuccess: function (ret) {
                delete self.state[uid];
                props.onSuccess(ret, file);
            },
            onError: function (err, ret) {
                delete self.state[uid];
                props.onError(err, ret, file);
            },
        });

        let result = props.onStart(file);
        if(result == false){
            self.abort(file);
        }
    }
    //重置
    reset() {
        this.setState({
            uid: getUid(),
        });
    }
    //取消
    abort (file) {
        const  reqs  = this.reqs;
        if (file) {
            let uid = file;
            if (file && file.uid) {
                uid = file.uid;
            }
            if (reqs[uid]) {
                reqs[uid].abort();
                delete reqs[uid];
            }
        } else {
            Object.keys(reqs).forEach(function (uid) {
                reqs[uid].abort();
                delete reqs[uid];
            });
        }
    }
    //选择文件
    onChange(e) {
        const files = e.target.files;
        this.uploadFiles(files);
        this.reset();
    }
    render () {
    	const self = this
    	const state = this.state
    	const props = this.props
        let  inputClassName = props.clsp + '-upload-ajax-input'
        if(props.showInput){
            inputClassName = inputClassName + ' ' + props.clsp + '-upload-ajax-input--show'
        }
        return (
            <div className={props.clsp + '-upload-ajax'}>
                <input  ref={"rfUploadInput"+state.uid}
                        type={props.type} 
                        name={props.name}
                        accept={props.accept} 
                        key={this.state.uid} 
                        className={inputClassName}
                        multiple={props.multiple} 
                        onChange={function(e){
                            if(props.autoUpload){
                                self.onChange(e)
                            }else{
                                props.waitingList(["rfUploadInput"+state.uid])
                            }
                        }}
                />
                <label  className={props.clsp + '-upload-ajax-label'+' '+props.wrapClassName} 
                        onClick={function(){
                            self.refs["rfUploadInput"+state.uid].click();
                        }}
                >
                    {props.children}
                </label>
            </div>
        )
    }
}

ajaxUpload.defaultProps = props.defaultProps
ajaxUpload.propTypes = props.propTypes

export default ajaxUpload ;
module.exports = ajaxUpload
