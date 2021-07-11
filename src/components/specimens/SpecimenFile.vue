<template>
  <div class="specimens specimens--text">
    <h2>文件体系</h2>
    <div class="specimen">
      <h3>单一文件</h3>
      <FormulateInput
        label="上传一个文件"
        type="file"
        :outer-class="['file-input-1']"
        help="选择任意文件上传"
        :uploader="uploadToS3"
        upload-url="https://cq2cm6d0h6.execute-api.us-east-1.amazonaws.com/signature"
      />
    </div>
    <div class="specimen">
      <h3>单一文件（只读）</h3>
      <FormulateInput
        disabled
        label="上传一个文件"
        type="file"
        :outer-class="['file-input-1']"
        help="选择任意文件上传"
        :uploader="uploadToS3"
        upload-url="https://cq2cm6d0h6.execute-api.us-east-1.amazonaws.com/signature"
      />
    </div>
    <div class="specimen">
      <h3>多文件</h3>
      <FormulateInput
        :multiple="true"
        label="上传文件"
        name="file"
        type="file"
        :outer-class="['file-input-2']"
        :value="[{ url: 'apple.pdf' }]"
        help="选择任意 pdf 文件上传"
        validation="mime:application/pdf"
      />
    </div>
    <div class="specimen">
      <h3>多文件（只读）</h3>
      <FormulateInput
        disabled
        :multiple="true"
        label="上传文件"
        name="file"
        type="file"
        :outer-class="['file-input-2']"
        help="选择任意 pdf 文件上传"
        validation="mime:application/pdf"
      />
    </div>
    <div class="specimen">
      <h3>图片</h3>
      <FormulateForm 
        v-model="formValues"
        @submit="sendData"
        name="demo"
      >
        <FormulateInput
          label="你长相怎样？"
          type="image"
          name="avatar"
          help="选择一个图片上传"
          multiple
        />
        <!-- <FormulateInput
          label="What do you look like?"
          type="image"
          name="avatar2"
          help="Select a picture to upload."
          ref="avatar2"
          multiple
        />
        <FormulateInput
          label="Click me"
          type="button" 
          @click="insertImg"
        >动态初始化图片</FormulateInput>
        <FormulateInput type="submit" label="submit"></FormulateInput> -->
      </FormulateForm>
      <!-- <code v-text="formResult" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues:{
        avatar2:[
          // {
          //   url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          //   name:'avatar1.png'
          // }
        ]
      },
      formResult:{}
    }
  },
  methods: {
    insertImg(){
      this.formValues.avatar2 = [
        {
          url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          name:'avatar1.png'
        }
      ]
    },
    sendData(value){
      this.formResult = value;
    },
    async uploadToS3 (file, progress, error, options) {
      const matches = file.name.match(/\.([a-zA-Z0-9]+)$/)
      const extension = (matches) ? matches[1] : 'txt'
      progress(5)
      const response = await fetch(options.uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          extension,
          mime: file.type || 'application/octet-stream'
        })
      })
      if (response.ok) {
        const { uploadUrl } = await response.json()
        progress(10)
        const xhr = new XMLHttpRequest()
        xhr.open('PUT', uploadUrl)
        xhr.upload.addEventListener('progress', e => progress(Math.round(e.loaded / e.total * 90) + 10))
        xhr.setRequestHeader('Content-Type', 'application/octet-stream')
        try {
          await new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status - 200) < 100 ? resolve() : reject(new Error('Failed to upload'))
            xhr.onerror = () => reject(new Error('Failed to upload'))
            xhr.send(file)
          })
          progress(100)
          const url = new URL(uploadUrl)
          return {
            url: `${url.protocol}//${url.host}${url.pathname}`,
            name: file.name
          }
        } catch {
          // we'll suppress this since we have a catch all error
        }
      }
      // Catch all error
      error('There was an error uploading your file.')
    }
  }
}
</script>
