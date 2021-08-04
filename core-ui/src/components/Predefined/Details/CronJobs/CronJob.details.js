import React from 'react';
import { CronJobSchedule } from 'shared/components/CronJob/CronJobSchedule';
import { CronJobConcurrencyPolicy } from './CronJobConcurrencyPolicy';
import { CronJobJobs } from './CronJobJobs.js';
import { CronJobLastScheduleTime } from '../../../../shared/components/CronJob/CronJobLastScheduleTime';
import { useTranslation } from 'react-i18next';

export const CronJobsDetails = ({ DefaultRenderer, ...otherParams }) => {
  const { t } = useTranslation();
  const customColumns = [
    {
      header: t('cron-jobs.schedule'),
      value: resource => <CronJobSchedule schedule={resource.spec.schedule} />,
    },
    {
      header: t('cron-jobs.last-schedule-time'),
      value: resource => (
        <CronJobLastScheduleTime
          lastScheduleTime={resource.status.lastScheduleTime}
        />
      ),
    },
    {
      header: t('cron-jobs.concurrency-policy.title'),
      value: resource => (
        <CronJobConcurrencyPolicy
          concurrencyPolicy={resource.spec.concurrencyPolicy}
        />
      ),
    },
    {
      header: t('cron-jobs.last-job-execution'),
      value: resource =>
        resource.status.active
          ? resource.status.active[resource.status.active.length - 1].name
          : t('cron-jobs.not-scheduled-yet'),
    },
  ];

  return (
    <DefaultRenderer
      customComponents={[CronJobJobs]}
      customColumns={customColumns}
      {...otherParams}
    />
  );
};
