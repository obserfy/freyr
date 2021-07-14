import React, { FC } from "react"
import { Trans, t } from "@lingui/macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button/Button"

const ContactUsPage: FC = () => (
  <Layout>
    <SEO title={t`Contact Us`} />
    <div className="px-3 flex-row sm:flex mt-16 mb-40">
      <div className="flex-row justify-center lg:w-1/2 mr-3 prose prose-lg">
        <h1>
          <Trans>Contact Us</Trans>
        </h1>
        <p className="text-xl mt-8 mb-3 text-gray-700 font-body max-w-md">
          <Trans>
            Have a question? Shoot us a message using this form. We&apos;d love
            to talk with you about your need.
          </Trans>
        </p>
      </div>
      <div className="flex-row justify-center lg:w-1/3 ml-auto">
        <form
          name="contact-us"
          method="POST"
          data-netlify="true"
          className="pt-3 md:pt-16"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="email" className="text-gray-700">
            <Trans>Email</Trans>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="stephen@gmail.com"
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              required
            />
          </label>
          <label htmlFor="message" className="text-gray-700">
            <Trans>Message</Trans>
            <textarea
              name="message"
              className="resize-none text-lg border rounded shadow w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 h-48"
              required
            />
          </label>
          <Button className="w-full text-lg" type="submit">
            <Trans>Send</Trans>
          </Button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactUsPage
