enum ApmAdditionalAction {
  RedirectToUrl = 'REDIRECT_TO_URL',
  OtpRequired = 'OTP_REQUIRED',
  ShowHtmlContent = 'SHOW_HTML_CONTENT',
  WaitForWebhook = 'WAIT_FOR_WEBHOOK',
  ApprovalRequired = 'APPROVAL_REQUIRED',
  VerifyRequired = 'VERIFY_REQUIRED',
  ShowQrCode = 'SHOW_QR_CODE',
  None = 'NONE'
}

export default ApmAdditionalAction;
