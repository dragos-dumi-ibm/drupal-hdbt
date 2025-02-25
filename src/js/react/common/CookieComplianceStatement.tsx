import ExternalLink from './ExternalLink';

type CookiCookieComplianceStatementProps = {
  host: string;
  policyUrl?: string;
  sourceUrl?: string;
};

const CookieComplianceStatement = ({ host, policyUrl, sourceUrl }: CookiCookieComplianceStatementProps) => (
    <div className='embedded-content-cookie-compliance'>
      <div className='message'>
        <h2>{Drupal.t('Content cannot be displayed')}</h2>
        <p>
          {Drupal.t(
            'This content is hosted by @host. To see the content, switch over to the external site or modify your cookie settings to allow for preference and statistics cookies.',
            {'@host': host}
          )}
        </p>
        <div className='buttons'>
            {sourceUrl &&
              <ExternalLink href={sourceUrl} title={<span className='hds-button__label'>{Drupal.t('See content on external site')}</span>} />
            }
            {policyUrl &&
              <ExternalLink href={policyUrl} title={<span className='hds-button__label'>{Drupal.t('Change cookie settings')}</span>} />
            }
        </div>
      </div>
    </div>
  );

export default CookieComplianceStatement;
